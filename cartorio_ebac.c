#include <stdio.h> //biblioteca de comunicação de entrada e saída
#include <stdlib.h> // biblioteca de alocação de espaço em memória
#include <locale.h> //biblioteca de alocações de texxto por região
#include <string.h> //biblioteca responsável pelas string (malha de informações)


int registro() //função voltada para o registro
{

	char arquivo[50]; //é uma variável que serve para a pessoa alocar um determinado número de caracteres
	char cpf[50];
	char nome[50];
	char sobrenome[50];
	char cargo[50];
	
	printf("Digite o CPF a ser cadastrado: "); // mostrar para o usuário
	scanf("%s", cpf); //criando uma malha de informações para o cpf
	
	strcpy(arquivo, cpf); //Responsável por copiar o valor das string
//	strcat(arquivo,".txt"); //Função responsável por alterar o tipo do arquivo
	
	FILE *file; //acessar o FILE e cria um file
	file = fopen(arquivo, "w"); // vai abrir a variável arquivo e reescrever no arquivo
	fprintf(file,cpf); //é para armazenar para o arquivo
	fclose(file); //fecha arquivo
	
	file = fopen (arquivo, "a"); // para atualizar a variável
	fprintf(file, ",");
	fclose(file);
	
	printf("Digite o nome a ser cadastrado: ");
	scanf("%s", nome);
	
	file=fopen(arquivo, "a");
	fprintf(file, nome); // vai escrever o nome já escrito pelo usuário no arquivo
	fclose(file);
	
	file=fopen(arquivo, "a");
	fprintf(file, ","); //atualizando o aquivo de forma automática com a , e o paragrafo
	fclose(file);
	
	printf("Digite o sobrenome a ser cadastrado: ");
	scanf("%s", sobrenome);
	
	file=fopen(arquivo, "a");
	fprintf(file, sobrenome);
	fclose(file);
	
	file=fopen(arquivo, "a");
	fprintf(file, ",");
	fclose(file);
	
	printf("Digite o cargo a ser cadastrado: ");
	scanf("%s", cargo);
	
	
	file=fopen(arquivo, "a");
	fprintf(file, cargo);
	fclose(file);
	
	file=fopen(arquivo, "a");
	fprintf(file, ",");
	fclose(file);
	
	system ("pause");
		
}

int consulta() //função voltada para o consulta
{
	
	setlocale(LC_ALL, "portuguese");

	char cpf[50];
	char conteudo[400];
	
	printf("Digite o CPF a ser consultado");
	scanf("%s",cpf);//lê o número
//	strcat(cpf,".txt");// ela adiciona o .txt na extensão
	
	FILE *file;
	file = fopen(cpf,"r"); // ele irá ler o arquivo
	
	if(file == NULL)
	
{
	printf ("Não foi possível abrir o arquivo, não localizado!\n");
}
	while(fgets(conteudo, 400, file) != NULL) // função que vai buscar o conteúdo, tamanho máximo do conteúdo, enquanto ele rodar dentro do arquivo parando caso seja nulo
{
	printf ("\nEssas são as informações do usuário: ");
	printf ("%s", conteudo);
	printf ("\n\n");
}
	system("pause");

}

int deletar() //função voltada para o deletar
{	
	char cpf[50];
	
	printf("Digite o CPF a ser deletado: ");
	scanf("%s",cpf);
	
	
	remove(cpf);
	
	FILE *file; //* é um tipo de ponteiro
	file = fopen(cpf,"r");
	
		if(file == NULL) 
		{
	
		printf("O usuário não localizado no sistema!\n");
		system("pause");
		
		}
		

}
int main() //Função na qual dá início
{
	int opcao=0; //definindo variáveis
	int laco=1;
	setlocale(LC_ALL, "Portuguese"); //definindo linguagem
	char senhadigitada[10]="a"; //string para conter toda a informação da senha que o usuário digitar
	printf("### Cartório da EBAC ### \n\n");
	printf("Login de administrador!\n\nDigite sua senha \n\n");
	scanf("%s", senhadigitada);
	
	// recomendação para validação de senha do professor seria como nas seguintes linhas
	// int comparacao após a char senhadigitada[] = "a";
	
	// comparacao = strcmp(senhadigitada,"admin");
	// +
	// if (comparcao == 0);2
	

	if (strcmp(senhadigitada, "admin") == 0) //função para validar a senha
	
			for ( laco = 1; laco = 1; ) // criar um ciclo de início e fim
			{
		
			system ("cls");
		
				
			printf("### Cartório da EBAC ### \n\n"); //início do menu
			printf("Escolha a opção desejada do menu:\n\n");
			printf("\t1 - Registrar nomes\n");
			printf("\t2 - Consultar nomes\n");
			printf("\t3 - Deletar nomes\n");
			printf("\t4 - Sair do sistema\n\n");
			printf("\topção (digite somente o número): "); //fim do menu
		
			scanf("%d", &opcao); //armazenando a escolha do usuário, & é um tipo de ponteiro
		
			system("cls"); //limpar página cabeçalho final da página
		
			switch(opcao) // condições
			{
			case 1:
			registro();
			break;
			
			case 2:
			consulta();
			break;
			
			case 3:
			deletar();
			break;
			
			case 4:
			printf("Obrigado por utilizar o sistema!\n");
			return 0;
			break;
			
			default:
			printf("Você não escolheu uma opção existente!\n");
			system("pause");
			break;
			
		}
		} //Fim da seleção
			else
			printf("senha incorreta!");
			
}git 