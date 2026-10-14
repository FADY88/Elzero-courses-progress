#include <iostream>
using namespace std;
int main()
{
  // Friends Array
  string friends[] = {"Ahmed", "Osama", "Ameer", "Fady"};
  int arrFriendsSize = sizeof(friends) / sizeof(friends[0]);

  // for loop
  for (int i = 0; i < arrFriendsSize; i += 1)
  {
    cout << "=========\n" << "= " << friends[i] << " =\n";
    cout << "==================\n" << "== ";
    int letterCount;
    for (letterCount = 0;;letterCount++) // Letters count in each name
    {
      if (friends[i][letterCount] == char(0))
      {
        break;
      }
    } // At the end of every string there is "\0" (Null)
    for (int j = 0; j < letterCount; j++) // Loop of individual letters
    {
      cout << friends[i][j];
      if (j != letterCount - 1) // Loop of commas except last letter
      {
        cout << ", ";
      }
    }
    cout << " =\n" << "==================\n\n";
  }
  // Output Needed
  // =========
  // = Ahmed =
  // ==================
  // == A, h, m, e, d =
  // ==================

  // =========
  // = Osama =
  // ==================
  // == O, s, a, m, a =
  // ==================

  // =========
  // = Ameer =
  // ==================
  // == A, m, e, e, r =
  // ==================
  return 0;
}