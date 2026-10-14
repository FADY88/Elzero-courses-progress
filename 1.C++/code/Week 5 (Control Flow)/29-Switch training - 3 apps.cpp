//Control Flow  -  Switch Trainings 
#include <iostream>
using namespace std;
int main()
{
  // App 1 => Award System Application
  int num;
  cout << "Enter your number please.\n";
  cin >> num;
  switch (num)
  {
  case 100:
  case 110:
  case 120:
    cout << "your reward is Iphone\n";
    break;
  case 200:
    cout << "your reward is Ipad\n";
    break;
  case 300:
    cout << "your reward is TV\n";
    break;
  case 400:
    cout << "your reward is KeyChain\n";
    break;
  default:
    cout << "No award for this number.\n";
  }
  // App 2 => Discount Application
  int price = 100 , discount = 10 , years;
  cout << "Type The Number Of Years in Company\n";
  cin >> years;
  switch (years)
  {
  case 1:
    discount = 20;
    break;
  case 2:
    discount = 40;
    break;
  case 3:
    discount = 80;
    break;
  }
  cout << "The Price Is " << price - discount << "\n";
  // App 3 => Simple Calculator
  int n1, n2, op;
  cout << "Type Number One\n";
  cin >> n1;
  cout << "Type Number Two\n";
  cin >> n2;
  cout << "Choose Operation Number\n";
  cout << "[1] +\n";
  cout << "[2] -\n";
  cout << "[3] /\n";
  cout << "[4] *\n";
  cin >> op;
  switch (op)
  {
  case 1:
    cout << n1 << " + " << n2 << " = " << n1 + n2 << "\n";
    break;
  case 2:
    cout << n1 << " - " << n2 << " = " << n1 - n2 << "\n";
    break;
  case 3:
    cout << n1 << " / " << n2 << " = " << n1 / n2 << "\n";
    break;
  case 4:
    cout << n1 << " * " << n2 << " = " << n1 * n2 << "\n";
    break;
  default:
    cout << "Operation Is Not Valid\n";
  }
  return 0;
}