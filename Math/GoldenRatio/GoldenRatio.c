#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>

int main()
{
  unsigned char tmp[2];
  int i, index, temp;
  FILE *input;
  FILE *output;

  i = 0;
  index = 0;
  while(1)
  {
    input = fopen("GoldenRatio.txt", "rb");
    fseek(input, i, SEEK_SET);
    temp = fread(tmp, sizeof(unsigned char), 1, input);

    printf("%d\n", index);

    //fgetc(stdin);

    if(temp == 0)
    {
      fclose(input);
      break; //EOF 時 break
    }
    fclose(input);

    if(tmp[0]==13 || tmp[0]==10)
    {
        i++;
        continue;
    }

    output = fopen("output.txt", "aw+");
    fprintf(output, "Sentence[%d] = %c;\n", index, tmp[0]);
    fclose(output);

    i++;
    index++;
  }

  return 0;
}
