package Study_mvc;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Study_mvc.MvcVO;

/**
 * Servlet implementation class MvcStudy
 */
@WebServlet(name = "ms", urlPatterns = { "/ms" })
public class MvcLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public MvcLogin() {
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
		String name = request.getParameter("name");
		String dtno = request.getParameter("dtno");

		boolean welcome = false;
		if (name != null && dtno != null) {
			MvcService srvc = new MvcService();
			MvcVO aa = new MvcVO();
			aa.setName(name);
			aa.setDtno(Integer.parseInt(dtno)); //Integer.parseInt(dtno)
			if (srvc.isValid(aa)) {
				welcome = true;
			}
			request.setAttribute("name", name);
		}
		String page = "/whyNot/Study/mvc_vision/visionLogin.jsp";
		if (welcome) {
			System.out.println("접속!");
			page = "/whyNot/Study/mvc_vision/visionMain.jsp";
		}
		RequestDispatcher rd = request.getRequestDispatcher(page);
		rd.forward(request, response);
	}

}
