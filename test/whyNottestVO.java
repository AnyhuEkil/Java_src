package test;

public class whyNottestVO {
   
   public String auction_id;
   public String auctioneer_id;
   public String item_name;
   public String start_date;
   public String end_date;
   public String state;
   public String cureent_bid_amount;
   
   public whyNottestVO(String auction_id,
		   String auctioneer_id,
		   String item_name,
		   String start_date,
		   String end_date,
		   String state,
		   String cureent_bid_amount) {
      this.auction_id = auction_id;
      this.auctioneer_id = auctioneer_id;
      this.item_name = item_name;
      this.start_date = start_date;
      this.end_date = end_date;
      this.state = state;
      this.cureent_bid_amount = cureent_bid_amount;
   }

   public String getAuction_id() {
      return auction_id;
   }

   public void setAuction_id(String auction_id) {
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

   public String getStart_date() {
      return start_date;
   }

   public void setStart_date(String start_date) {
      this.start_date = start_date;
   }

   public String getEnd_date() {
      return end_date;
   }

   public void setEnd_date(String end_date) {
      this.end_date = end_date;
   }

   public String getState() {
      return state;
   }

   public void setState(String state) {
      this.state = state;
   }

   public String getCureent_bid_amount() {
      return cureent_bid_amount;
   }

   public void setCureent_bid_amount(String cureent_bid_amount) {
      this.cureent_bid_amount = cureent_bid_amount;
   
   }
   
}