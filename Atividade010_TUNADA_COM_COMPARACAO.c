#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <ctype.h>
#include <string.h>
#include <windows.h>
#include <conio.h>

int main(){
      setlocale(LC_ALL, "Portuguese");

    float nota1, nota2, snota1, snota2, media, media2;
    int  escolha, escolha2, escolha3, cont2, cont, cont3 = 0;
    float notaf, notaf2;
    int faltasf, faltasf2;
    int faltas, faltas2, matricula, matricula2, cpf, cpf2, rg, rg2, idade, idade2;
    char nome1 [25], snome1 [25];
    char nome2 [25], snome2 [25];
    int nomei1, nomei2, nome1len, nome2len, snome1len, snome2len;
    
    
cont2 = 0;
while (cont2 != 2){//abrindo um while para o menu principal de escolha de aluno

printf ("Escolha uma aluno: \n1 - Aluno 1 \n2 - Aluno 2\n\n");
              scanf("%i", &escolha);
            
  switch ( escolha )//switch de escolha de aluno
  {

case  1:// cadastro do aluno 1 usando um submenu
      cont = 0;
      while (cont != 4){//abrindo outro while para o submenu de cadastro

printf ("Escolha uma op��o: \n1 - Notas e Faltas \n2 - Dados Pessoais \n3 - Matr�cula \n4 - Nome completo\n\n");
			  scanf("%i", &escolha2);
              
  switch ( escolha2 )
  {

    case  1:
    	
    	 printf("\n---------------------------------------------\n");
         printf("\nDigite a 1� nota do aluno: \n");
         scanf("%f", &nota1);
        printf("\n---------------------------------------------\n");
        
        printf("\nDigite a 2� nota do aluno: \n");
         scanf("%f", &nota2);
        printf("\n---------------------------------------------\n");
        
         printf("\nDigite a quantidade de faltas do aluno: \n");
         scanf("%i", &faltas);
        printf("\n---------------------------------------------\n");
        
        system("cls");
        cont++;
        break;
        
    case 2:
    	
    	 printf("\n---------------------------------------------\n");
         printf("\nDigite a idade do aluno: \n");
         scanf("%i", &idade);
         printf("\n---------------------------------------------\n\n");
    
         printf("\n---------------------------------------------\n");
         printf("\nDigite o CPF do aluno: \n");
         scanf("%i", &cpf);
         printf("\n---------------------------------------------\n\n");
  
    	printf("\n---------------------------------------------\n");
        printf("\nDigite o RG do aluno: \n");
        scanf("%i", &rg);
        printf("\n---------------------------------------------\n\n");
    	system("cls");
         cont++;
         break;
         
    case 3:
    	
    	printf("\n---------------------------------------------\n");
        printf("\nDigite a matrícula do aluno: \n");
        scanf("%i", &matricula);
        printf("\n---------------------------------------------\n\n");
        system("cls");
         cont++;
         break;
    	
    case 4:
    	
         printf("\n---------------------------------------------\n");
         printf("\nDigite o  primeiro nome do aluno: \n");
          scanf("%s", &nome1);
          printf("\n---------------------------------------------\n");
           
         printf("\nDigite o sobrenome do aluno: \n\n");
          scanf("%s", &snome1);
          printf("\n---------------------------------------------\n");
        system("cls");
         cont++;
         break;
         
    default:
    	printf("Op��o Inv�lida!");
    	break;
}
}

cont2++;
break;
//fim do caso 1 do menu principal
case 2: 
cont3 = 0;
     while (cont3 != 4){// outro submenu de cadastro para o aluno 2

printf ("Escolha uma op��o: \n1 - Notas e Faltas \n2 - Dados Pessoais \n3 - Matr�cula \n4 - Nome completo\n\n");
              scanf("%i", &escolha3);
              
  switch ( escolha3 )
  {

    case  1:
    	
    	 printf("\n---------------------------------------------\n");
         printf("\nDigite a 1� nota do aluno: \n");
         scanf("%f", &snota1);
        printf("\n---------------------------------------------\n");
        
        printf("\nDigite a 2� nota do aluno: \n");
         scanf("%f", &snota2);
        printf("\n---------------------------------------------\n");
        
         printf("\nDigite a quantidade de faltas do aluno: \n");
         scanf("%i", &faltas2);
        printf("\n---------------------------------------------\n");
        
        system("cls");
        cont3++;
        break;
        
    case 2:
    	
    	 printf("\n---------------------------------------------\n");
         printf("\nDigite a idade do aluno: \n");
         scanf("%i", &idade2);
         printf("\n---------------------------------------------\n\n");
    
         printf("\n---------------------------------------------\n");
         printf("\nDigite o CPF do aluno: \n");
         scanf("%i", &cpf2);
         printf("\n---------------------------------------------\n\n");
  
    	printf("\n---------------------------------------------\n");
        printf("\nDigite o RG do aluno: \n");
        scanf("%i", &rg2);
        printf("\n---------------------------------------------\n\n");

         cont3++;
         break;
         
    case 3:
    	
    	printf("\n---------------------------------------------\n");
        printf("\nDigite a matr�cula do aluno: \n");
        scanf("%i", &matricula2);
        printf("\n---------------------------------------------\n\n");
        system("cls");
         cont3++;
         break;
    	
    case 4:
    	
         printf("\n---------------------------------------------\n");
         printf("\nDigite o  primeiro nome do aluno: \n");
          scanf("%s", &nome2);
          printf("\n---------------------------------------------\n");
           
         printf("\nDigite o sobrenome do aluno: \n\n");
          scanf("%s", &snome2);
          printf("\n---------------------------------------------\n");
        system("cls");
         cont3++;
         break;
         
    default:
    	printf("Op��o Inv�lida!");
    	break;
}
}

cont2++;
break;
//fim do caso 2 do menu principal
default:
    	printf("Op��o Inv�lida!");
    	break; // fim do menu principal
}
}

    media = (nota1 + nota2)/2; //tirando a media somando as duas VAR e dividindo pelo total de variaveis presentes
    media2 = (snota1 + snota2)/2;
    
    nomei1 = strcat(nome1, " ");// concatenando os nomes para nomes completos em uma s� vari�vel
    nomei1 = strcat(nome1, snome1);
    
    nomei2 = strcat(nome2, " ");
    nomei2 = strcat(nome2, snome2);
    
    nome1len = strlen(nome1);// conseguindo o n�mero de caracteres presentes no nome
    nome2len = strlen(nome2);
    snome1len = strlen(snome1);
    snome2len = strlen(snome2);
    
    //dados dos alunos individualmente
    
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 11);
        printf("\n*********************************************\n");
        SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
		printf("\n\t\tDados dos alunos: \n\n"); //dados do aluno
    	printf("\n*\tNome do primeiro aluno: %s \n", nomei1);
    	printf("\n*\tNome do segundo aluno: %s \n\n", nomei2);
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
    	printf("\n\t-------- // -------- // --------\n");
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
    	printf("\n-\tIdade primeiro aluno: %i \n", idade);
    	printf("\n-\tIdade segundo aluno: %i \n\n", idade2);
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
    	printf("\n\t-------- // -------- // --------\n");
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
        printf("\n*\tPrimeira matricula: %i \n", matricula);
        printf("\n*\tSegunda Matricula: %i \n\n", matricula2);
        SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
        printf("\n\t-------- // -------- // --------\n");
        SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
		printf("\n-\tPrimeiro RG: %i \n", rg);
		printf("\n-\tSegundo RG: %i \n\n", rg2);
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
		printf("\n\t-------- // -------- // --------\n");
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
        printf("\n*\tPrimeiro CPF: %i \n", cpf); 
		printf("\n*\tSegundo CPF: %i \n", cpf2);       
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 11);
        printf("\n*********************************************\n");
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
		
		//--------------------------------------------------------------
		
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 11);
        printf("\n*********************************************\n");
          SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
		printf("\n\t\tCompara��o dos dados: \n\n");
			if (nome1len > nome2len)
    	printf("\n*\tMaior nome: %s \n", nome1);
    		else
    	printf("\n*\tMaior nome: %s \n\n", nome2);
    	//
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
    	printf("\n\t-------- // -------- // --------\n");
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
    	//
    	if (snome1len > snome2len)
    		printf("\n*\tMaior sobrenome: %s \n", snome1);
    	else
    	printf("\n*\tMaior sobrenome: %s \n\n", snome2);
    	//
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
    	printf("\n\t-------- // -------- // --------\n");
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
    	//
    	if (idade > idade2)
    		printf("\n-\tMaior idade: %i \n", idade);
    	else
    	printf("\n-\tMaior idade: %i \n", idade2);
    	//
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
    	printf("\n\t-------- // -------- // --------\n");
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
    	//
    	if (matricula > matricula2)
  	      printf("\n*\tMaior matricula: %i \n", matricula);
        else
    	    printf("\n*\tMaior matricula: %i \n", matricula2);
        //
        SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
        printf("\n\t-------- // -------- // --------\n");
        SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
        //
        if (rg > rg2)
			printf("\n-\tMaior RG: %i \n", rg);
		else
			printf("\n-\tMaior RG: %i \n", rg2);
		//
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
		printf("\n\t-------- // -------- // --------\n");
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
		//
		if (cpf > cpf2)
     	   printf("\n*\tMaior CPF: %i \n", cpf); 
        else
			printf("\n*\tMaior CPF: %i \n", cpf2);     
		//  
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 11);
        printf("\n*********************************************\n");
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
		//
       //situa��o do aluno
    	printf("\n\t\tSitua��o Individual: \n\n"); //situa��o individual como o aluno est�
    	
    		printf("\n\t%s: \n\n",nomei1); //dados do aluno
   		printf("\n\tSeu numero de faltas �: %i \n", faltas);
   
   		printf("\n\tSua media �: %.1f \n", media);
   		
     SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
		printf("\n\t-------- // -------- // --------\n");
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
	   		
   			printf("\n\t%s: \n\n",nomei2); //dados do aluno
   		printf("\n\tSeu numero de faltas �: %i \n", faltas);
   
   		printf("\n\tSua media �: %.1f \n", media);
   
   
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 11);
        printf("\n*********************************************\n");
          SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
    printf("\n\t\tSitua��o FINAL: \n\n");//resultado final do aluno
    	printf("\n\t%s: \n\n",nomei1); //dados do aluno    


     // 1 = MEDIA
     // 2 = REPROVADO
     // 0 = RECUPERA��O
     
     //IF DE MEDIA
     
if (media >= 5.1){
          notaf = 1;//m�dia
          }

else if (media >= 2.0 && media <= 5.0){
     notaf = 0;//recupera��o
     }
     
else {
     notaf = 2;//reprovado
     }
     
     //IF DE FALTAS
if (faltas < 10){
          faltasf = 1;
          }

else if (faltas >= 10 && faltas <= 30){
     faltasf = 0;
     }
     
else {
     faltasf = 2;
     }
      
	// IF PARA RESULTADO FINAL

if (notaf == 1 && faltasf == 1) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
          printf ("\n\tAPROVADO(a) \n\n\tVoc� est� aprovado tanto em faltas quanto em nota!\n\n");
          }
          
else if (notaf == 0 && faltasf == 1) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 13);
     printf("\n\tRECUPERA��O \n\n\tVoc� est� de recupera��o em nota!\n\n");
     }
     
else if (notaf == 1 && faltasf == 0) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 13);
     printf("\n\tRECUPERA��O \n\n\tVoc� est� de recupera��o por causa de faltas!\n\n");
     }

    else if (faltasf == 2 && notaf == 2 ) {
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 12);
     printf("\n\tREPROVADO(a) \n\n\tVoc� foi reprovado(a) por causa de faltas e nota!\n\n");
     }

else if (faltasf == 2) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 12);
     printf("\n\tREPROVADO(a) \n\n\tVoc� foi reprovado(a) por causa de faltas!\n\n");
     }
     
else if (notaf == 2) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 12);
     printf("\n\tREPROVADO(a) \n\n\tVoc� foi reprovado(a) por causa de nota!\n\n");
     }
     

else {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 12);
     printf("\n\tREPROVADO(a) \n\n\tVoc� foi reprovado(a) tanto em faltas quanto em media!\n\n");
    }
     SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 14);
		printf("\n\t-------- // -------- // --------\n");
		SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);
      
      	printf("\n\t%s: \n\n",nomei2); //dados do aluno
      	
if (media2 >= 5.1){
          notaf2 = 1;//m�dia
          }

else if (media2 >= 2.0 && media2 <= 5.0){
     notaf2 = 0;//recupera��o
     }
     
else {
     notaf2 = 2;//reprovado
     }
     
     //IF DE FALTAS
if (faltas2 < 10){
          faltasf2 = 1;
          }

else if (faltas2 >= 10 && faltas2 <= 30){
     faltasf2 = 0;
     }
     
else {
     faltasf2 = 2;
     }
      
	// IF PARA RESULTADO FINAL

if (notaf2 == 1 && faltasf2 == 1) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 10);
          printf ("\n\tAPROVADO(a) \n\n\tVoc� est� aprovado tanto em faltas quanto em nota!\n\n");
          }
          
else if (notaf2 == 0 && faltasf2 == 1) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 13);
     printf("\n\tRECUPERA��O \n\n\tVoc� est� de recupera��o em nota!\n\n");
     }
     
else if (notaf2 == 1 && faltasf2 == 0) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 13);
     printf("\n\tRECUPERA��O \n\n\tVoc� est� de recupera��o por causa de faltas!\n\n");
     }

    else if (faltasf2 == 2 && notaf2 == 2 ) {
    	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 12);
     printf("\n\tREPROVADO(a) \n\n\tVoc� foi reprovado(a) por causa de faltas e nota!\n\n");
     }

else if (faltasf2 == 2) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 12);
     printf("\n\tREPROVADO(a) \n\n\tVoc� foi reprovado(a) por causa de faltas!\n\n");
     }
     
else if (notaf2 == 2) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 12);
     printf("\n\tREPROVADO(a) \n\n\tVoc� foi reprovado(a) por causa de nota!\n\n");
     }
     
     
else {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 12);
     printf("\n\tREPROVADO(a) \n\n\tVoc� foi reprovado(a) tanto em faltas quanto em media!\n\n");
    }
	
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 11);
        printf("\n*********************************************\n");
          SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);      	

    system("PAUSE");
    return 0;
}
