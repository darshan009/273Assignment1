import java.util.ArrayList;
import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;

public class collections {
	
	public static void main(String[] args){
		//array list - add items in your to do list
		List toDo = new ArrayList();
		toDo.add("2-study");
		toDo.add("1-do assginment");
		toDo.add("3-enjoy weekend");
		
		System.out.println("to do list:\n"+toDo);
		
		//sorting
		SortedSet toDoSorted = new TreeSet();
		toDoSorted.add("2-study");
		toDoSorted.add("1-do assginment");
		toDoSorted.add("3-enjoy weekend");
		
		System.out.println("After sorting:\n"+toDoSorted);
		
	}
	
}