## Creating HTML Tables

HTML tables are used to present data in a tabular format. They can be useful for displaying large amounts of data, such as a list of products or a schedule. In this lesson, we will cover the basics of creating HTML tables.

#### Table Structure

A HTML table consists of rows and columns. The &lt;table&gt; element defines the table, and the &lt;tr&gt; element defines a table row. The &lt;td&gt; element defines a table cell, which represents a single data point in the table. For example:

    <table>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </table>

#### Table Headings

You can add headings to a table by using the &lt;th&gt; element instead of &lt;td&gt;. The &lt;th&gt; element is used to define a header cell, which is typically used to label a column or a row. For example:

    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </table>

#### Spanning Columns or Rows

You can merge cells horizontally or vertically using the colspan and rowspan attributes. The colspan attribute is used to merge cells horizontally, while the rowspan attribute is used to merge cells vertically. For example:

    <table>
      <tr>
        <th rowspan="2">Header 1</th>
        <th>Header 2</th>
      </tr>
      <tr>
        <td>Header 3</td>
      </tr>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </table>

#### Practice

Try creating a table with multiple rows and columns, and experiment with different combinations of spanning columns and rows.
In the next lesson, we will cover HTML forms and how they can be used to gather data from users.