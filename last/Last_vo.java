// z02_vo.Emp_0511
package last;

import java.util.Date;
import java.text.SimpleDateFormat;

/*CREATE TABLE EMP
(
   EMPNO      NUMBER (4),
   ENAME      VARCHAR2 (10),
   JOB        VARCHAR2 (9),
   MGR        NUMBER (4),
   HIREDATE   DATE,
   SAL        NUMBER (7, 2),
   COMM       NUMBER (7, 2),
   DEPTNO     NUMBER (2)
)
NOCACHE
LOGGING;*/
public class Last_vo {
	private int jempno;
	private String jename;
	private String jjob;
	private int jmgr;
	private Date jhiredate;
	private double jsal;
	private double jcomm;
	private int jdeptno;
	
	public Last_vo() {
	}
	
	public Last_vo(int jempno, String jename, String jjob, int jmgr, Date jhiredate, double jsal, double jcomm,
			int jdeptno) {
		this.jempno = jempno;
		this.jename = jename;
		this.jjob = jjob;
		this.jmgr = jmgr;
		this.jhiredate = jhiredate;
		this.jsal = jsal;
		this.jcomm = jcomm;
		this.jdeptno = jdeptno;
	}

	public int getJempno() {
		return jempno;
	}

	public void setJempno(int jempno) {
		this.jempno = jempno;
	}

	public String getJename() {
		return jename;
	}

	public void setJename(String jename) {
		this.jename = jename;
	}

	public String getJjob() {
		return jjob;
	}

	public void setJjob(String jjob) {
		this.jjob = jjob;
	}

	public int getJmgr() {
		return jmgr;
	}

	public void setJmgr(int jmgr) {
		this.jmgr = jmgr;
	}

	public Date getjhiredate() {
		return jhiredate;
	}

	public void setjhiredate(Date jhiredate) {
		this.jhiredate = jhiredate;
	}

	public double getJsal() {
		return jsal;
	}

	public void setJsal(double jsal) {
		this.jsal = jsal;
	}

	public double getJcomm() {
		return jcomm;
	}

	public void setJcomm(double jcomm) {
		this.jcomm = jcomm;
	}

	public int getJdeptno() {
		return jdeptno;
	}

	public void setJdeptno(int jdeptno) {
		this.jdeptno = jdeptno;
	}
	
	
}
