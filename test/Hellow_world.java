/*
# MVC 패턴과 모델2 구조
1. server(웹어플리케이션 서버)
   1) controller : 서블릿
   2) 모델 : ejb 내지 비지니스 로직 처리 클래스, 자바빈
   3) 뷰 : jsp
   
2. client(사용자)
  - 웹 브라우저 내지 휴대폰과 같은 기기

3) Controller 단 처리
   1) servlet으로 구현
   2) service(HttpServletRequest request
      - request : 요청처리
   3) model 호출을 통한 구현(service)
      - view단에 넘겨줄 핵심 데이터 처리(VO, ArrayList<VO>)
      - request, session.setAttribute("뷰단호출key", 모델 객체);
   4) view 호출
      - jsp호출 처리
*/


package test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



/**
 * Servlet implementation class Hellow_world
 */
@WebServlet(name = "hellow", urlPatterns = { "/hellow" })
public class Hellow_world extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Hellow_world() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	     response.setContentType("text/html; charset=UTF-8");
	     PrintWriter out = response.getWriter();
	     out.print("<html><body><h1>GOOD JOB!web.xml</h1></body></html>");
	  }

}




