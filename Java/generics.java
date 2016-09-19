
public class generics {
	
	//generic method
	public static <E> void storeAnyValue(E[] anyValue){
		for(E element: anyValue) {
			System.out.printf("%s ", element);
		}
	}
	
	public static void main(String[] args){
		Integer[] numbers = {34,57,78};
		String[] words = {"hi", "how is it going", "done"};
		
		System.out.println("numbers ");
		storeAnyValue(numbers);
		
		System.out.println("\nwords ");
		storeAnyValue(words);
	}
	
}
