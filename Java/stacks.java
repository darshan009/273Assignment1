import java.util.Stack;

public class stacks {

	public static void main(String[] args){
		Stack tires = new Stack();
		for(int i=0; i<=6; i++){
			tires.push("tire"+i);
		}

		while(!tires.empty()){
			System.out.print(tires.pop());
			System.out.println(",");
		}
	}
}
