package Cookie;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Cookie
 */
@WebServlet(name = "plist", urlPatterns = { "/plist" })
public class productlist extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public productlist() {
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
		System.out.println("callme");
		Cookie[] cookies = request.getCookies();
		Code cd = null;
		ArrayList<Code> cookList = new ArrayList<Code>();
		if (cookies != null && cookies.length > 0) {
			for (Cookie c : cookies) {
				if (c.getName().length() >= 7 && c.getName().substring(0, 7).equals("product")) {
					cd = new Code();
					cd.setName(c.getName());
					cd.setValue(c.getValue());
					cookList.add(cd);
				}
			}
		}
		System.out.println("쿠키갯수:" + cookList.size());
		request.setAttribute("cookList", cookList);

		String page = "/whyNot/Study/list.jsp";
	}

}
