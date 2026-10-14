/*
  Function 
    Parameters & Arguments
*/

#include <iostream>
using namespace std;

void sayHello(string msg, string name, int age)  // Parameter
{
  cout << msg << " "<< name << ".\n";
  cout << name << "'s age is " << age << "\n";
}

int main()
{
  sayHello("Hello", "Fady", 20);  // Argument
  sayHello("Hi", "Ahmed", 35);  
  sayHello("Welcome", "Osama", 40);  
  return 0;
}