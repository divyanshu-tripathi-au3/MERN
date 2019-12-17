function printPyramid() {
    var i, j, N, columns;
    columns=1;
    N=5
      for(i=1;i<N*2;i++)
      {
          for(j=1; j<=columns; j++)
          {
              document.write("*");
          }
  
          if(i < N)
          {
            columns++;
          }
          else
          {
           columns--;
          }
          
          document.write("<br>");
      }     
  
  
    //  for(i=1; i <= 5; i++)
    //   {
    //     for(j=1; j<=i; j++)
    //     {
    //       document.write('*');
    //     }
    //     document.write("<br>");
    //   }
  
    //   for(i=4;i>=1;i--)
    //   {
    //       for(j=1;j<=i;j++)
    //     {
    //     document.write('*');
    //     }
    //     document.write("<br>");
    //   }  
      
  
}
  
  printPyramid();
  
  
   
  
      
  