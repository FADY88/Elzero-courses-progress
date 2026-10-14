/*  Control Flow
  - If Condition Trainings
    4 Training Apps
      - Even / Odd Checker
      - Find Greatest Number
      - User Rank Checker
      - Simple Calculator */
#include <iostream>
using namespace std;
int main()
{
  // App 1 => Even / Odd Checker
  cout << "App 1 => Even / Odd Checker\nEnter a number\n";
  int num = 0;
  cin >> num;
  if (num % 2 == 0)
    cout << num << " is an even number.\n";
  else
    cout << num << " is an odd number.\n";
  // App 2 => Find Greatest Number
  cout << "App 2 => Find Greatest Number\nEnter three numbers.\n";
  int a, b, c;
  cin >> a >> b >> c;
  if (a > b && a > c)
    cout << a << " is the greatest.\n";
  else if (/*b > a &&*/ b > c) // Not necessary part
    cout << b << " is the greatest.\n";
  else
    cout << c << " is the greatest.\n";
  // App 3 => User Rank Checker
  cout << "App 3 => User Rank Checker\nEnter your points\n";
  int points;
  cin >> points;
  // turn negative to positive
  if (points < 0)
    points = points * -1;
  if (points > 0 && points <= 500)
    cout << "Not bad\b";
  else if (points > 500 && points <= 1000)
    cout << "Good\n";
  else if (points > 1000)
    cout << "Great\n";
  else
    cout << "You have no rank\n";
  // App 4 => Simple Calculator
  cout << "App 4 => Simple Calculator\n";
  int num1, num2, op;
  cout << "Enter number 1\n";
  cin >> num1;
  cout << "Choose the Operator\n";
  cout << "[1] is Add\n";
  cout << "[2] is Sub\n";
  cout << "[3] is Div\n";
  cout << "[4] is Mul\n";
  cin >> op;
  cout << "Enter number 2\n";
  cin >> num2;
  if (op == 1)
    cout << "The sum is " << num1 + num2;
  else if (op == 2)
    cout << "The difference is " << num1 - num2;
  else if (op == 3)
    cout << "The quotient is " << num1 / num2;
  else if (op == 4)
    cout << "The product is " << num1 * num2;
  else
    cout << "Invalid operator.\n";
  return 0;
}