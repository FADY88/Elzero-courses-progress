#include <iostream>
using namespace std;
void calculator(double x, double y, char op)
{
  switch (op)
  {
  case '+':
    cout << x << " + " << y << " = " << x + y << "\n";
    break;
  case '-':
    cout << x << " - " << y << " = " << x - y << "\n";
    break;
  case '*':
    cout << x << " * " << y << " = " << x * y << "\n";
    break;
  case '/':
    cout << x << " / " << y << " = " << x / y << "\n";
    break;
  }
}
int main()
{
  double x, y;
  char op;
  cout << "Enter two numbers.\n";
  cin >> x >> y;
  cout << "Choose an operator [+, -, /, *]\n";
  do
  {
    cout << "Operator: ";
    cin >> op;
  } while (op != '+' && op != '-' && op != '*' && op != '/');
  calculator(x, y, op);
  return 0;
}