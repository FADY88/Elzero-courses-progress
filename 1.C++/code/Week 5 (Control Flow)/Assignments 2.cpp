#include <iostream>
using namespace std;

int main()
{
  int num;
  cout << "Number: ";
  cin >> num;
  switch (num) // Answer
  {
    case 10:
      cout << "Case 1";
      break;
    case 20:
      cout << "Case 2";
      break;
    case 30:
    case 31:
    case 32:
      cout << "Case 3";
      break;
    default:
      cout << "Invalid Number";
  } // Answer
  /* Old Code
  if (num == 10)
  {
    cout << "Case 1";
  }
  else if (num > 19 && num < 21)
  {
    cout << "Case 2";
  }
  else if (num > 29 && num < 33)
  {
    cout << "Case 3";
  }
  else
  {
    cout << "Invalid Number";
  } */
  return 0;
}