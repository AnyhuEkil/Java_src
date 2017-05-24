package test;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import test.Service_test;

/**
 * Servlet implementation class Login_test
 */
@WebServlet(name = "login", urlPatterns = { "/login" })
public class Login_test extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Login_test() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("오잉크!");
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");

		// 2.모델호출후 결과값
		boolean goMain = false;
		if (id != null && pwd != null) {
//			if (id.equals("why") && pwd.equals("1111")) {
//				goMain = true;
//				request.setAttribute("id", id);
//			}
			Service_test service = Service_test();
			Member vo = new Member();
			vo.setMemid(id);
			vo.setMepass(pwd);
			
			if(service.isValid(vo)){
				goMain=true;
			}
		}
		

		// 3. view 호출
		System.out.println("id:" + id);
		String page = "/test/a10_login.jsp";
		// if(id==null||id.trim().equals("")){
		// page="/test/a10_login.jsp";
		// }else{
		//
		// }
		System.out.println("이동할 page:" + page);
	}

}
