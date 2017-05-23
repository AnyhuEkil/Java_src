package fm_VO;

import java.util.Date;

public class Auction_Bid {
	private int bidderID;
	private int auction_id;
	private Date bidding_date;
	private double bid_amount;
	
	public Auction_Bid() {
	}
	public Auction_Bid(int bidderID, int auction_id, Date bidding_date, double bid_amount) {
		this.bidderID = bidderID;
		this.auction_id = auction_id;
		this.bidding_date = bidding_date;
		this.bid_amount = bid_amount;
	}
	public int getBidderID() {
		return bidderID;
	}
	public void setBidderID(int bidderID) {
		this.bidderID = bidderID;
	}
	public int getAuction_id() {
		return auction_id;
	}
	public void setAuction_id(int auction_id) {
		this.auction_id = auction_id;
	}
	public Date getBidding_date() {
		return bidding_date;
	}
	public void setBidding_date(Date bidding_date) {
		this.bidding_date = bidding_date;
	}
	public double getBid_amount() {
		return bid_amount;
	}
	public void setBid_amount(double bid_amount) {
		this.bid_amount = bid_amount;
	}

}
