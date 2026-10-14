/*
  Pointers
    Void, wild pointer and Null
*/
#include <iostream>
using namespace std;
int main()
{
  int* ptr1; // Wild pointer
  int* ptr2 = NULL; 
  int* ptr3 = nullptr;
  
  cout << ptr1 << "\n"; // Garbage value
  cout << ptr2 << "\n"; // 0
  cout << ptr3 << "\n"; // 0

  int a = 100; 
  void* ptr = &a;

  cout << ptr << "\n";
  // cout << *ptr << "\n"; // Error because of void

  // C-Style casting
  cout << *(int*)ptr << "\n"; // 100
  // Modern
  cout << *static_cast<int*>(ptr) << "\n"; // 100
  return 0;
}