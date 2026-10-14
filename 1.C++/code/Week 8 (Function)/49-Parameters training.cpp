/*
  Function
    Parameters & Arguments training
      Create ice box
      Simple calculator
*/
#include <iostream>
using namespace std;

void iceBox(string item)
{
  if (item == "Coca Cola")
  {
    cout << item << " will be colder\n";
  }
  if (item == "Apple")
  {
    cout << item << " will be fresh\n";
  }
  if (item == "Juice")
  {
    cout << item << " will be frozen\n";
  }
  else
  {
    cout << item << " is invalid\n";
  }
}

void calc(int num1, int num2)
{
  cout << num1 << " + " << num2 << " = " << num1 + num2;
}

int main()
{
  iceBox("Coca cola");
  iceBox("Apple");
  iceBox("Juice");
  iceBox("TV remote");
  calc(10, 90);
  return 0;
}