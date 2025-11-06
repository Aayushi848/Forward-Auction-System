import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BidderList from '../../../common/table/BidderList'; // assuming it takes `bidders` prop
import "../../../common/form/CreateAuction.css";
const ViewAuction = () => {
  const navigate = useNavigate();
  const location = useLocation();
const previewOnly = location.state?.previewOnly || false;
const [formData, setFormData] = useState(null);

  const [auctionData, setAuctionData] = useState(null);
  const [bidders, setBidders] = useState([]);
  const [itemList, setItemList] = useState([]);
  const auctionId = location.state?.auctionId || '';
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemForm, setItemForm] = useState({
    lotNumber: '',
    category: '',
    description: '',
    quantity: '',
    uom: '',
    openingPrice: '',
    reservePrice: '',
    bidIncrement: '',
  });

  useEffect(() => {
     if (previewOnly) {
    setAuctionData(location.state.auctionData);
    const previewItemList = location.state.auctionData.itemList || [];
    setItemList(previewItemList);
    if (previewItemList.length > 0) {
      setItemForm(previewItemList[0]); // prepopulate with first item
    }
    setBidders(location.state.auctionData.bidders || []);
    setLoading(false);
  }  else{
    //const auctionId = location.state?.auctionId;
    //if (!auctionId) return;
   // if (loading) return <div>Loading...</div>;
//if (!auctionData) return <div>Auction not found</div>;

    const fetchAuction = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/auction/${auctionId}`);
        const data = res.data;
        setAuctionData(data);
        setFormData({
  auctionName: data.auctionName,
  startDate: data.startDate,
  closeDate: data.closeDate,
  currency: data.currency,
  location: data.location,
  allowAutoBid: data.allowAutoBid || false,
  allowConfigurableTime: data.allowConfigurableTime || false,
  HideOpeningPrice: data.HideOpeningPrice || false,
  HideQuantity: data.HideQuantity || false,
  // add other fields as needed
});

        setBidders(data.bidders || []);
        setItemList(data.itemList || []);
      
      } catch (err) {
        console.error(err);
        alert("Failed to fetch auction");
      }
      finally {
    setLoading(false); // ✅ ALWAYS set loading to false at the end
  }
    };

    
    
    fetchAuction();
  }
 }, [location.state]);
 
  if (loading) return <div>Loading...</div>;
if (!auctionData) return <div>Auction not found</div>;


  const handleAddBidder = () => {
    navigate('/FindBidderPage', { state: { selectedBidders: bidders } });
  };

  const handleRemoveBidder = (idToRemove) => {
    setBidders((prev) => prev.filter((bidder) => bidder.id !== idToRemove));
  };

  const handleAddItem = () => {
    if (
      !itemForm.lotNumber ||
      !itemForm.category ||
      !itemForm.description ||
      !itemForm.quantity ||
      !itemForm.uom ||
      !itemForm.openingPrice ||
      !itemForm.reservePrice ||
      !itemForm.bidIncrement
    ) {
      alert('Please fill all item fields before adding.');
      return;
    }

    setItemList([...itemList, itemForm]);
    setItemForm({
      lotNumber: '',
      category: '',
      description: '',
      quantity: '',
      uom: '',
      openingPrice: '',
      reservePrice: '',
      bidIncrement: '',
    });
  };

  if (!auctionData) return <div>Loading...</div>;

  return (
    <div className="create-auction-container">
       <div className="breadcrumb-section">
        <Link to="/" className="home">Home</Link>
        <span className="divider">/</span>
        <span className="active-page">Preview Auction</span>
      </div>
      <div className="form-section">
        <h3>Preview</h3>
        <hr />

        <div className="form-row">
          <div className="form-group">
            <label>Auction Format</label>
            <input type="text" disabled value={auctionData?.auctionFormat || 'Forward Auction'} />
          </div>
          <div className="form-group">
            <label>Auction Type</label>
            <input type="text" disabled value={auctionData?.auctionType || 'English'} />
          </div>
          <div className="form-group">
            <label>Auction Rule</label>
            <input type="text" disabled value={auctionData?.auctionRule || 'Highest Bid Wins'} />
          </div>
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox"  checked={formData?.allowAutoBid ?? auctionData?.allowAutoBid ?? false}
  onChange={(e) =>
    setFormData({ ...formData, allowAutoBid: e.target.checked })
  }/>
            Allow Auto Bid
          </label>
          <label>
            <input type="checkbox"  checked={formData?.allowConfigurableTime ?? auctionData?.allowConfigurableTime  ?? false}
  onChange={(e) =>
    setFormData({ ...formData, allowConfigurableTime: e.target.checked })
  }/>
            Allow Configurable Time
          </label>
          <label>
            <input type="checkbox" checked={formData?.HideOpeningPrice?? auctionData?.HideOpeningPrice?? false}
  onChange={(e) =>
    setFormData({ ...formData, HideOpeningPrice: e.target.checked })}/>
          Hide Opening Price
          </label>
          <label>
            <input type="checkbox" checked={formData?.HideQuantity?? auctionData?.HideQuantity?? false}
  onChange={(e) =>
    setFormData({ ...formData, HideQuantity: e.target.checked })}/>
          Hide Quantity
          </label>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Auction No</label>
            <input type="text" disabled value={auctionData?.auctionId || ''} />
          </div>
          <div className="form-group">
            <label>Auction Name</label>
            <input type="text" value={formData?.auctionName || auctionData?.auctionName || ''}
  onChange={(e) =>
    setFormData({ ...formData, auctionName: e.target.value })}  />
          </div>
          <div className="form-group">
            <label>Start Time</label>
            <input type="time" value={auctionData?.startDate?.slice(11, 16) || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Close Time</label>
            <input type="time" value={auctionData?.closeDate?.slice(11, 16) || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" value={auctionData?.startDate?.slice(0, 10) || ''} readOnly />
          </div>
          <div className="form-group">
            <label>Close Date</label>
            <input type="date" value={auctionData?.closeDate?.slice(0, 10) || ''} readOnly />
          </div>
          
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Currency Type</label>
            <select  value={formData?.currency || auctionData?.currency || '--Select--'}
  onChange={(e) =>
    setFormData({ ...formData, currency: e.target.value })
  }>
              <option>--Select--</option>
              <option>Rupee</option>
              <option>$ US Dollar</option>
            </select>
          </div>
          <div className="form-group">
            <label>Auction Location</label>
            <select  value={formData?.location || auctionData?.location || '--Select--'}
  onChange={(e) =>
    setFormData({ ...formData, location: e.target.value })
  }>
              <option>--Select--</option>
              <option>Angul</option>
              <option>Raigarh</option>
            </select>
          </div>
          <div className="form-group">
            <label>Terms & Conditions</label>
            <input type="file" disabled />
          </div>
          
        </div>
      {/* <div className= "checkbox-group">
            <label>
              <input type="checkbox" checked={auctionData?.allowAutoMail || false} />
              Auto Mail 
            </label>
            <label>
              <input type="checkbox" checked={auctionData?.allowMultipleCurrency || false} />
              Multiple Currency Allowed
            </label>
          </div>*/}
      </div>

      <div className="bidder-list-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ margin: 0 }}>Bidder List</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div className="checkbox-group">
      <label>
        <input type="checkbox"
         />
        All Bidders
      </label>
      <label>
        <input type="checkbox" />
        Product-Wise Bidders
      </label>
      <label>
        <input type="checkbox" />
        Random
      </label>
    </div>
    </div>
          <button onClick={handleAddBidder} className="add-bidder-btn"  >
            + Add Bidder
          </button>
        </div>
        <BidderList bidders={bidders} handleRemoveBidder={handleRemoveBidder} />
      </div>

      <div className="form-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ margin: 0 }}>Item List</h3>
          <button onClick={handleAddItem} className="add-bidder-btn">
            + Add Item
          </button>
        </div>
       
          <div className="form-row">
  <div className="form-group">
    <label>Lot Number</label>
    <input
      type="text"
      value={itemForm.lotNumber}
      onChange={(e) => setItemForm({ ...itemForm, lotNumber: e.target.value })}
      placeholder="Enter lot number"
    />
  </div>

  <div className="form-group">
    <label>Product Category</label>
    <select
      value={itemForm.category}
      onChange={(e) => setItemForm({ ...itemForm, category: e.target.value })}
    >
      <option>--Select--</option>
      <option>Scrap</option>
      <option>Raw Material</option>
      <option>Machinery</option>
    </select>
  </div>

  <div className="form-group">
    <label>Description</label>
    <input
      type="text"
      value={itemForm.description}
      onChange={(e) => setItemForm({ ...itemForm, description: e.target.value })}
      placeholder="Description of item"
    />
  </div>

  <div className="form-group">
    <label>Quantity</label>
    <input
      type="number"
      min="0"
      value={itemForm.quantity}
      onChange={(e) => setItemForm({ ...itemForm, quantity: e.target.value })}
      placeholder="Enter quantity"
    />
  </div>

  <div className="form-group">
    <label>UOM</label>
    <select
      value={itemForm.uom}
      onChange={(e) => setItemForm({ ...itemForm, uom: e.target.value })}
    >
      <option>--Select--</option>
      <option>Kg</option>
      <option>Ton</option>
      <option>Piece</option>
    </select>
  </div>

  <div className="form-group">
    <label>Opening Price</label>
    <input
      type="number"
      min="0"
      value={itemForm.openingPrice}
      onChange={(e) => setItemForm({ ...itemForm, openingPrice: e.target.value })}
      placeholder="Enter opening price"
    />
  </div>

  <div className="form-group">
    <label>Reserve Price</label>
    <input
      type="number"
      min="0"
      value={itemForm.reservePrice}
      onChange={(e) => setItemForm({ ...itemForm, reservePrice: e.target.value })}
      placeholder="Enter reserve price"
    />
  </div>

  <div className="form-group">
    <label>Bid Increment</label>
    <input
      type="number"
      min="0"
      value={itemForm.bidIncrement}
      onChange={(e) => setItemForm({ ...itemForm, bidIncrement: e.target.value })}
      placeholder="e.g. 100 or 2%"
    />
  </div>

<div className="bidder-table-wrapper">
          <div className="table-scroll">
            <table className="bidder-table">
              <thead>
                <tr>
                 
                  <th>Lot Number</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>UOM</th>
                  <th>Opening Price</th>
                  <th>Reserve Price</th>
                  <th>Bid Increment</th>
                   <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {itemList.map((item, index) => (
                  <tr key={index}>
                   
                    <td>{item.lotNumber}</td>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.quantity}</td>
                    <td>{item.uom}</td>
                    <td>{item.openingPrice}</td>
                    <td>{item.reservePrice}</td>
                    <td>{item.bidIncrement}</td>
                     <td>
                  <button
                      onClick={() => handleRemoveBidder(b.id)}
                      className="remove-btn"
                      title="Remove bidder"
                    >
                    🗑️
                    </button>
                </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
{previewOnly && (
        <button className="add-bidder-btn" 
        style={{ marginTop: '20px', fontSize: '14px' }}
         onClick={async () => {
      // ✅ Use the preview data to create auction
      const item = itemList[0];
      const formattedDate = new Date(auctionData.startDate)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

      const auctionPayload = {
        ItemCode: item.lotNumber,
        ItemDesc: item.description,
        AuctionQty: parseFloat(item.quantity),
        UOM: item.uom,
        RequiredDate: formattedDate,
        OpeningPrice: parseFloat(item.openingPrice),
        ReservePrice: parseFloat(item.reservePrice),
        BidDecrement: parseFloat(item.bidIncrement),
        bidDecrementType: "Fixed",
        AuctionDesc: auctionData.auctionName,
        startDate: auctionData.startDate,  
        closeDate: auctionData.closeDate 
        // Extendble as required
      };
try {
        const res = await axios.post('http://localhost:5000/api/auction/create', auctionPayload);
        const auctionId = res.data.auctionId;
        alert("Auction Created with ID: " + auctionId);
        navigate('/ViewEditAuction', { state: { auctionId } });
      } catch (err) {
        console.error(err);
        alert("Error creating auction");
      }
    }}
  
        >
          Submit Auction
        </button>
)}
      </div>
    </div>
  );
};

export default ViewAuction;
