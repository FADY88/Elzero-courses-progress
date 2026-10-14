/*
  Array
    Guess the number from sequences game
*/
#include <iostream>
using namespace std;
int main()
{
  int points = 0;
  int answers[3];
  cout << "Type the missing number in sequences\n";
  cout << "Sequence 1 \n 1 | 5 | 10 | 16 | ?\n";
  cin >> answers[0];

  cout << "Sequence 2 \n 2 | 4 | 8 | 16 | ?\n";
  cin >> answers[1];

  cout << "Sequence 3 \n 1 | 1 | 2 | 3 | ?\n";
  cin >> answers[2];

  int sequences[3][5] = {
      {1, 5, 10, 16, 23},
      {2, 4, 8, 16, 32},
      {1, 1, 2, 3, 5}};
  if (answers[0] == sequences[0][4])
    points++;
  if (answers[1] == sequences[1][4])
    points++;
  if (answers[2] == sequences[2][4])
    points++;

  cout << "Your points are " << points << " from 3.\n";
  return 0;
}