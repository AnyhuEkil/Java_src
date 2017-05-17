package acon_whyNot01;

import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

public class Write {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String fold="C:/a01_prog/eclipse/workspace/acon_whyNot/src/acon_whyNot01/";
		String fname=fold+"text03";
		Writer writer=null;
		
		try{
			writer = new FileWriter(fname);
			char[] data = "오잉크".toCharArray();
			for(char ch:data){
				writer.write(ch);
			}
			writer.write("\nGOOD JOB");
			
		}catch(IOException e){
			e.printStackTrace();
		}finally{
			try{
				writer.flush();
				writer.close();
			}catch(IOException e){
				e.printStackTrace();
			}
		}
		
	}

}
