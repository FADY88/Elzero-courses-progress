/*
  String
    Concatenating stringa
      Normal way
      Strcat => Include string.h
      With +
      Append
*/
#include <iostream>
#include <string.h>
using namespace std;

int main()
{
  char fname[] = "Fady ";
  char lname[] = "Adel";
  cout << fname << lname << "\n";       // Normal way
  cout << strcat(fname, lname) << "\n"; // Strcat

  string firstname = "Fady ";
  string lastname = "Adel";
  
  cout << firstname + lastname << "\n";       // With +
  cout << firstname.append(lastname) << "\n"; // Append

  return 0;
}