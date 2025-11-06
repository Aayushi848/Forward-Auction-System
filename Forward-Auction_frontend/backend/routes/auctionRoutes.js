// backend/routes/auctionRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const mysqlDateTime = (isoString) => {
  if (!isoString) return null;
  return new Date(isoString).toISOString().slice(0, 19).replace('T', ' ');
};
// Route to create a new auction
router.post('/create', (req, res) => {
  const {
    ItemCode,
    ItemDesc,
    AuctionQty,
    UOM,
    RequiredDate,
    OpeningPrice,
    ReservePrice,
    BidDecrement,
    bidDecrementType,
    AuctionDesc,
    startDate,   
    closeDate 
  } = req.body;

  console.log("Received auctionData:", req.body); //  Log this

  const insertQuery = `
    INSERT INTO auction_detail (
      ItemCode, ItemDesc, AuctionQty, UOM, RequiredDate,
      OpeningPrice, ReservePrice, BidDecrement, bidDecrementType, AuctionDesc,
      startDate, closeDate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    insertQuery,
    [
      ItemCode,
      ItemDesc,
      AuctionQty,
      UOM,
      RequiredDate,
      OpeningPrice,
      ReservePrice,
      BidDecrement,
      bidDecrementType,
      AuctionDesc,
      mysqlDateTime(startDate),   // convert to SQL format
      mysqlDateTime(closeDate)
     
    ],
    (err, result) => {
      if (err) {
        console.error(" SQL Insert Error:", err.sqlMessage || err.message); //  Detailed error
        return res
          .status(500)
          .json({ error: 'Database insert error', detail: err.sqlMessage || err.message });
      }

      const auctionId = result.insertId;
      res.status(200).json({ message: 'Auction created', auctionId });
    }
  );
});
router.get('/:id', (req, res) => {
  const auctionId = req.params.id;

  const query = 'SELECT * FROM auction_detail WHERE AuctionDetailId = ?';

  db.query(query, [auctionId], (err, results) => {
    if (err) {
      console.error('Error fetching auction:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Auction not found' });
    }

    res.status(200).json(results[0]);
  });
});
// Get auction by ID
router.get('/:id', (req, res) => {
  const auctionId = req.params.id;

  const query = 'SELECT * FROM auction_detail WHERE AuctionDetailID = ?';

  db.query(query, [auctionId], (err, results) => {
    if (err) {
      console.error('Error fetching auction:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Auction not found' });
    }

    res.status(200).json(results[0]);
  });
});
// Route to get auction counts
router.get('/stats/counts', (req, res) => {
  const query = `
    SELECT
      SUM(CASE WHEN NOW() BETWEEN startDate AND closeDate THEN 1 ELSE 0 END) AS liveCount,
      SUM(CASE WHEN DATE(startDate) = CURDATE() THEN 1 ELSE 0 END) AS todayCount,
      SUM(CASE WHEN YEARWEEK(startDate, 1) = YEARWEEK(CURDATE(), 1) THEN 1 ELSE 0 END) AS weekCount,
      SUM(CASE WHEN MONTH(startDate) = MONTH(CURDATE()) AND YEAR(startDate) = YEAR(CURDATE()) THEN 1 ELSE 0 END) AS monthCount
    FROM auction_detail
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching auction counts:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(200).json(results[0]);
  });
});

// Route to get today's auctions
router.get('/list/today', (req, res) => {
  const query = `
    SELECT *, 
      DATE_FORMAT(startDate, '%Y-%m-%d') as formattedStartDate,
      DATE_FORMAT(startDate, '%h:%i %p') as formattedStartTime,
      DATE_FORMAT(closeDate, '%h:%i %p') as formattedEndTime,
      CASE 
        WHEN NOW() BETWEEN startDate AND closeDate THEN 'Live'
        WHEN NOW() < startDate THEN 'Scheduled'
        ELSE 'Closed'
      END as status
    FROM auction_detail
    WHERE DATE(startDate) = CURDATE()
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching today auctions:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(200).json(results);
  });
});

// Route to get this week's auctions
router.get('/list/week', (req, res) => {
  const query = `
    SELECT *, 
      DATE_FORMAT(startDate, '%Y-%m-%d') AS formattedStartDate,
      DATE_FORMAT(startDate, '%h:%i %p') AS formattedStartTime,
      DATE_FORMAT(closeDate, '%h:%i %p') AS formattedEndTime,
      CASE 
        WHEN NOW() BETWEEN startDate AND closeDate THEN 'Live'
        WHEN NOW() < startDate THEN 'Scheduled'
        ELSE 'Closed'
      END AS status
    FROM auction_detail
    WHERE YEARWEEK(startDate, 1) = YEARWEEK(CURDATE(), 1)
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching week auctions:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(200).json(results);
  });
});
// Get current month auctions
//  Route to get current month's auctions using MySQL
router.get('/list/month', (req, res) => {
  const query = `
    SELECT *,
      DATE_FORMAT(startDate, '%Y-%m-%d') AS formattedStartDate,
      DATE_FORMAT(startDate, '%h:%i %p') AS formattedStartTime,
      DATE_FORMAT(closeDate, '%h:%i %p') AS formattedEndTime,
      CASE 
        WHEN NOW() BETWEEN startDate AND closeDate THEN 'Live'
        WHEN NOW() < startDate THEN 'Scheduled'
        ELSE 'Closed'
      END AS status
    FROM auction_detail
    WHERE MONTH(startDate) = MONTH(CURDATE()) AND YEAR(startDate) = YEAR(CURDATE())
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error(' Error fetching current month auctions:', err);
      return res.status(500).json({ error: 'Database error', detail: err.message });
    }

    res.status(200).json(results);
  });
});



module.exports = router;
