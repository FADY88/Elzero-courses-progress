//   --- Create App To Convert ASCII To Character
//   --- Create App To Convert Character To ASCII
#include <iostream>
using namespace std;

int main()
{
    cout << "ASCII-Character convertor" << endl;
    cout << "Choose A or B \n(A = ASCII To Character , B = Character To ASCII)\n";
    char Key = 'a'; 
    cin >> Key;
    while (Key == 'a' || Key == 'A' || Key == 'b' || Key == 'B')
    {
        if (Key == 'a' || Key == 'A')
        {
            int ASCII;
            cout << "Enter your ASCII number please.\n";
            cin >> ASCII;
            cout << "Tha character is: " << char(ASCII) << endl;
        }
        else if (Key == 'b' || Key == 'B')
        {
            char chara;
            cout << "Enter your character please.\n";
            cin >> chara;
            cout << "Tha number is: " << int(chara) << endl;
        }
        else
        {
            cout << "Not valid input\n";
        }
        cout << "Press A or B to try again\n";
        cout << "(A = ASCII To Character , B = Character To ASCII)\n";
        cout << "Press any other key to quit\n";
        cin >> Key;
    }      
    
    return 0;
}