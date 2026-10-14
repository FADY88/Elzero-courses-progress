/*
  Loop
    for => Specific number of loops
    While => loop as long condition is true
    do...while => always execute once

  app_1 => Count Positive & Even numbers only
  app_2 => Guess the number
  app_3 => Reversed elements from user
*/
#include <iostream>
using namespace std;
int main()
{
  // app_1 => Count Positive & Even numbers only
  int numbers[] = {10, 20, -20, 13, 30, -30, 40};
  int result = 0, numsSize = size(numbers);
  for (int i = 0; i < numsSize; i++)
  {
    if (numbers[i] % 2 == 0 && numbers[i] > 0)
    {
      result += numbers[i];
    }
  }
  cout << "Result: " << result << "\n";
  // app_2 => Guess the number
  int nums[] = {1, 2, 3, 4, 5, 7, 8, 9, 10};
  const int guessNumber = 7, attempts = 3;
  int choose, guessTries = 0;
  // // My code
  cout << "Guess the number from 1 to 10.\n";
  for (int i = 0; i < attempts; i++)
  {
    cin >> choose;
    if (choose == guessNumber)
    {
      cout << "Congratulation you guessed it\n";
      break;
    }
    else
    {
      cout << "Sorry you can try again\n";
    }
    if (i == 2)
    {
      cout << "Sorry, you failed. the number is: " << guessNumber << "\n";
    }
  }
  // // Elzero code
  while (true)
  {
    cin >> choose;
    if (choose == guessNumber)
    {
      cout << "Congratulation you guessed it\n";
      break;
    }
    else
    {
      cout << "Sorry you can try again\n";
      guessTries++;
    }
    if (guessTries == 3)
    {
      cout << "Sorry, you failed. the number is: " << guessNumber << "\n";
      break;
    }
  }
  // app_3 => Reversed elements from user
  int vals[5];
  cout << "type 5 numbers.\n";
  /* my way (adds not needed step)
  for (int i = 0; i < 5; i++)
  {
    cin >> vals[4 - i];
  }*/
  for (int i = 4; i > -1; i--)
  {
    cin >> vals[i];
  }
  cout << "\n";
  for (int i = 0; i < 5; i++)
  {
    cout << vals[i] << "\n";
  }
  // My app => Positive to negative and vice versa
  char repeat = 'y';
  int number;
  do
  {
    cout << "Enter a number to reverse.\n";
    cin >> number;
    cout << "The revere is: " << number * -1 << "\n";
    do
    {
      cout << "Again? (y / n)\n";
      cin >> repeat;
    } while (repeat != 'Y' && repeat != 'y' && repeat != 'N' && repeat != 'n');
  } while (repeat == 'Y' || repeat == 'y');
  return 0;
}