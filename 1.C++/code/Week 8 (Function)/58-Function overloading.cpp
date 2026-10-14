/*
  Function overloading
    Number And/Or type of params is different
*/
#include <iostream>
using namespace std;

void print(int a, int b) 
{
  cout << "Number one is : " << a << "\n";
  cout << "Number two is : " << b << "\n";
} 
void print(int a, int b, int c) // overloaded function(changing number of parameters)
{
  cout << "Number one is : " << a << "\n";
  cout << "Number two is : " << b << "\n";
  cout << "Number three is : " << c << "\n";
} 
void print(string a, string b) // overloaded function(changing type of parameters)
{
  cout << "Text one is : " << a << "\n";
  cout << "Text two is : " << b << "\n";
} 

int main()
{
  print(10, 20);
  print(100, 200, 300);
  print("Fady", "Batman");
  return 0;
}