package fm_VO;

import java.sql.Date;

public class SecondPageDTO {

	public Integer auction_id;
	public String auctioneer_id;
	public String item_name;
	public Date start_date;
	public Date end_date;
	public String state;
	public Double current_bid_amount;

	public SecondPageDTO() {

	}
	public SecondPageDTO(Integer auction_id, String auctioneer_id, String item_name, Date start_date, Date end_date,
			String state, Double current_bid_amount) {
		this.auction_id = auction_id;
		this.auctioneer_id = auctioneer_id;
		this.item_name = item_name;
		this.start_date = start_date;
		this.end_date = end_date;
		this.state = state;
		this.current_bid_amount = current_bid_amount;
	}

	public Integer getAuction_id() {
		return auction_id;
	}

	public void setAuction_id(Integer auction_id) {
		this.auction_id = auction_id;
	}

	public String getAuctioneer_id() {
		return auctioneer_id;
	}

	public void setAuctioneer_id(String auctioneer_id) {
		this.auctioneer_id = auctioneer_id;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Double getCurrent_bid_amount() {
		return current_bid_amount;
	}

	public void setCurrent_bid_amount(Double current_bid_amount) {
		this.current_bid_amount = current_bid_amount;

	}

}
