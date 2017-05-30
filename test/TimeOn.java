package test;

import java.io.IOException;
import java.io.PrintWriter;
//import java.sql.Date;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.TimeZone;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TimeOn {
	String curTime = null;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/html;charset=euc-kr");
		PrintWriter out = resp.getWriter();
		out.println("<HTML>");
		out.println("<BODY>");
		out.println("<br/>한국 현재 시간!!");

		// 현재 시간
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
		// 두번째 local 인자 세팅해도 안됨, client로 사용될때만 가능: new Locale("ko","KOREA") or
		// Locale.KOREA

		Date dTime = new Date();
		TimeZone tz = TimeZone.getTimeZone("Asia/Seoul");
		// 서울시간, 표준시간:GMT, 자바 서버에서는 이렇게 Zone을 설정함.

		sdf.setTimeZone(tz);
		curTime = sdf.format(dTime);

		out.println("<br/>한국 현재시간: " + curTime);

		out.println("</BODY>");
		out.println("</HTML>");
		out.close();

	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("<br/>한국 현재시간: " + curTime);
	}
}