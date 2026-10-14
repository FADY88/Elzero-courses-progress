#include <iostream>
#include <vector>
using namespace std;

string TrimStr(string s, char c = ' ',string direction = "all")
{
  string result;
  int left = 0, right = 0;
  int index = s.size() - 1;
  for (int i = 0; i <= index; i++) // left side
  {
    if (s[i] == c)
      left++;
    else
      break;
  }
  for (int i = index; i >= 0; i--) // right side
  {
    if (s[i] == c)
      right++;
    else
      break;
  }

  if (direction == "left")
    right = 0;
  else if (direction == "right")
    left = 0;
  else if (direction != "all")
    return "Invalid direction";
  
  for (int i = left; i <= index - right; i++)
  {
    result += s[i];
  }
  return result;
}

int main()
{
  cout << TrimStr("#####string##", '#') << endl;
  cout << TrimStr("#####string##", '#', "right") << endl;
  cout << TrimStr("#####string##", '#', "left") << endl;
}