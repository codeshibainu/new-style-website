#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>

int main()
{
  unsigned char tmp[2];
  int i, temp;
  FILE *input;
  FILE *output;

  i = 0;
  while(1)
  {
    input = fopen("pi-10million.txt", "rb");
    fseek(input, i, SEEK_SET);
    temp = fread(tmp, sizeof(unsigned char), 1, input);

    printf("%c", tmp[0]);

    //fgetc(stdin);

    if(temp == 0)
    {
      fclose(input);
      break; //EOF 時 break
    }
    fclose(input);

    output = fopen("pi.txt", "aw+");
    fprintf(output, "Sentence[%d] = %c;\n", i, tmp[0]);
    fclose(output);

    i++;
  }

  return 0;
}
