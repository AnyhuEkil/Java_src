package test;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MVCtest
 */
@WebServlet(name = "mvc04", urlPatterns = { "/mvc04" })
public class MVCtest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
	
    public MVCtest() {
        super();
        // TODO Auto-generated constructor stub
    }
	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String num01= request.getParameter("num01");
		String ver= request.getParameter("ver");
		cnt++;
		System.out.println(cnt+"번째 입력");
		System.out.println("mvc04 호출!!"+num01);
		System.out.println("mvc04 버전!!"+ver);
		
		
	}

}
