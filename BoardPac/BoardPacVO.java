package BoardPac;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;


public class BoardPacVO {

	private Integer boardNo;
	private String title;
	private String contents;
	private String id;
	private String ip;
//	SimpleDateFormat formatter = new SimpleDateFormat ( "yyyy-MM-dd HH:mm:ss", Locale.KOREA );
//	Date currentTime = new Date ();
//	private String writeTime = formatter.format ( currentTime );
	private Date writeTime;
	private Integer lookup;
	
	public Integer getBoardNo() {
		return boardNo;
	}
	public void setBoardNo(Integer boardNo) {
		this.boardNo = boardNo;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public Date getWriteTime() {
		return writeTime;
	}
	public void setWriteTime(Date writeTime) {
		this.writeTime = writeTime;
	}
	public Integer getLookup() {
		return lookup;
	}
	public void setLookup(Integer lookup) {
		this.lookup = lookup;
	}
	
}