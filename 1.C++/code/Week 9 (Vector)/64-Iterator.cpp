/*
  Containers
    Array
    Vector
    List
  What is Iterators
    Iterators are used to point to memory address of the container
    Why do we use Iterators
  [1] Simplify the code => No need to see the full iteration on containers
  [2] Support for many algorithms like sorting and finding
  [3] Allow the dealing with one element without the need to load the full list
  [4] Work the same way with all containers
  [5] It reduce the complexity and execution time of the application
  Syntax
    Container<Type>::iterator IteratorName;
  Initialize
    With Vector syntax
    With auto keyword
  Print
    [*] Dereference => don't print the iterator, print what its pointing at
*/
#include <iostream>
#include <vector>
using namespace std;
int main()
{
  vector<int> nums = {10, 20, 30, 40};
  vector<int>::iterator it = nums.begin();
  auto ite = nums.begin() + 1 ;
  cout << "First element is: " << *it << "\n";
  cout << "Second element is: " << *ite << "\n";
  cout << "First element is: " << *nums.begin() << "\n";

  nums.erase(nums.begin(), nums.begin() + 2);
  cout << "First element after erasing is: " << *nums.begin() << "\n";
  return 0;
}