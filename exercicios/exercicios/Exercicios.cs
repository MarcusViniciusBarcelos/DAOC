
namespace Exercicios
{
    class Exercicios
    {
        public static void Exercicio1()
        {
            string nome = "Paulo";
            int idade = 17;
            double nota = 7.5;

            Console.WriteLine($"\nAluno {nome} tem {idade} anos e nota {nota}");

        }

        public static void Exercicio2()
        {
            string nome = "Paulo";
            int idade = 17;
            double nota = 7.5;

            Console.WriteLine(nome);
            Console.WriteLine(idade);
            Console.WriteLine(nota);
        }

        public static void Exercicio3()
        {
            Console.Write("\nDigite três letras: ");
            string letras = Console.ReadLine();
            string reverso = $"\n{letras[2]}{letras[1]}{letras[0]}";
            Console.WriteLine($"\nOrdem reversa: {reverso}");
        }

        public static void Exercicio4()
        {
            Console.Write("\nDigite o primeiro valor: ");
            double valor1 = Convert.ToDouble(Console.ReadLine());
            Console.Write("\nDigite o segundo valor: ");
            double valor2 = Convert.ToDouble(Console.ReadLine());


            Console.WriteLine($"\nSoma: {valor1 + valor2}");
            Console.WriteLine($"Subtração: {valor1 - valor2}");
            Console.WriteLine($"Multiplicação: {valor1 * valor2}");
            Console.WriteLine($"Exponenciação: {Math.Pow(valor1, valor2)}");
            Console.WriteLine($"Divisão: {valor1 / valor2}");
            Console.WriteLine($"Módulo: {valor1 % valor2}");
        }

        public static void Exercicio5()
        {
            double a = 1, b = 12, c = -13;
            double delta = Math.Pow(b, 2) - 4 * a * c;
            double x1 = (-b + Math.Sqrt(delta)) / (2 * a);
            double x2 = (-b - Math.Sqrt(delta)) / (2 * a);
            Console.WriteLine($"\nx1: {x1}");
            Console.WriteLine($"x2: {x2}");
        }

        public static void Exercicio6()
        {
            Console.Write("\nDigite o nome: ");
            string nomeLogin = Console.ReadLine();
            Console.Write("Digite a senha: ");
            int senha = Convert.ToInt32(Console.ReadLine());

            string mensagem = (nomeLogin == "admin" || nomeLogin == "maria") && senha == 123
                ? "\nLogin feito com sucesso"
                : "\nLogin inválido";
            Console.WriteLine(mensagem);
        }

        public static void Exercicio7()
        {
            Console.Write("\nDigite um número inteiro para x: ");
            int x = Convert.ToInt32(Console.ReadLine());
            Console.Write("Digite um número inteiro para y: ");
            int y = Convert.ToInt32(Console.ReadLine());

            string parImparX = x % 2 == 0 ? "par" : "ímpar";
            string parImparY = y % 2 == 0 ? "par" : "ímpar";
            Console.WriteLine($"\nx é {parImparX}");
            Console.WriteLine($"y é {parImparY}");
        }
    }
    
}
