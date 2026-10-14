/*
  Pointers
  What are Pointers?
    A variable that stores the memory address of another variable

  why do we need pointers?
    to iterate on elements in data structures like Arrays
    Pass function to other function
    Dynamic memory allocation

  Benefits of using pointers 
    reduce the code and increase performance

  Note
    there's a raw pointer and a smart pointer

  Syntax
    Declare a pointer
    Print variable memory address => reference operator || address of [&]
    Print the value that the memory address points to => dereference operator [*]
    Change the variable value with a pointer
*/
#include <iostream>
using namespace std;
int main()
{
  int num = 100;
  int* ptr = &num;
  cout << "Value: " << num << "\n";
  cout << "Address: " << &num << "\n";
  cout << "Address: " << ptr << "\n";
  cout << "Value: " << *ptr << "\n";

  *ptr = 200;
  
  cout << "Value: " << num << "\n";
  cout << "Address: " << &num << "\n";
  cout << "Address: " << ptr << "\n";
  cout << "Value: " << *ptr << "\n";
  return 0;
}