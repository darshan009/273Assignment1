import java.util.LinkedList;

public class queues {

	public static void main(String[] args){
		LinkedList preReq = new LinkedList();
		preReq.add("Darshan");
		preReq.add("Avinash");
		preReq.add("Lalith");
		preReq.add("Jibran");
		preReq.add("Jigar");
		preReq.add("Raaj");
		
		System.out.println("The total wait list size is: "+preReq.size());
		System.out.println("The first 4 students are:");
		for(int i=0; i<4;i++)
			System.out.println(preReq.get(i));
	}
}
