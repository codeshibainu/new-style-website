import re

# 打开原始文件
with open('WuYanLvShi.txt', 'r', encoding='utf-8') as file:
    # 读取文件内容
    content = file.read()

# 替换标点符号和数字为换行符
for char in ' 　、「」：；（）.『』，。！？0123456789':
    content = content.replace(char, '\n')

# 删除多余的换行符
content = re.sub(r'\n+', '\n', content)

# 写入新文件
with open('clean_WuYanLvShi.txt', 'w', encoding='utf-8') as file:
    file.write(content)

print("处理完成，结果已写入clean_WuYanLvShi.txt文件。")
