/*
  Function 
    Built-in functions
      cctype functions
        tolower()
        toupper()
        isupper()
        islower()
        isspace()

    Create 2 applications
      Swap case app
      remove spaces app
*/
#include <iostream>
#include <cctype>
using namespace std;
int main()
{
  cout << "A\n";                      // A
  cout << tolower('A') << "\n";       // 97 => ASCII Value
  cout << char(tolower('A')) << "\n"; // a
  cout << "=========================\n";
  cout << "b\n";                      // b
  cout << toupper('b') << "\n";       // 66 => ASCII Value
  cout << char(toupper('b')) << "\n"; // B
  cout << "=========================\n";
  // Swap case app
  string nameone = "ElZEro"; // eLzeRO
  int n = size(nameone);
  for (int i = 0; i < n; i++)
  {
    if (isupper(nameone[i]))
    {
      nameone[i] = tolower(nameone[i]);
    }
    else if (islower(nameone[i]))
    {
      nameone[i] = toupper(nameone[i]);
    }
    else
    {
      continue;
    }
  }
  cout << nameone << "\n";
  cout << "=========================\n";
  // Remove spaces app (remove from string) {My stupid way:)}
  string nametwo = "f  a  d    y  ahaf   ohgrth  l lh";
  int n2 = size(nametwo);
  for (int i = 0; i < n2; i++)
  {
    if (isspace(nametwo[i]))
    {
      int s = 0;
      for (int t = i + 1;; s++, t++)
      {
        if (nametwo[t] != ' ')
        {
          break;
        }
      }
      for (int j = i; nametwo[j] != 0; j++)
      {
        nametwo[j] = nametwo[j + 1 + s];
      }
    }
  }
  cout << nametwo << "\n";
  cout << "=========================\n";
  // Remove spaces app (skipping their iterations)
  string nametwo2 = "E\nl  \n\tz  e\t\nro";
  int n2_2 = size(nametwo2);
  for (int i = 0; i < n2_2; i++)
  {
    // if (nametwo2[i] == ' ') // just for spaces
    // {
    //   continue;
    // }
    if (isspace(nametwo2[i]))
    {
      continue;
    }
    else 
    {
      cout << nametwo2[i];
    }
  }
  return 0;
}
