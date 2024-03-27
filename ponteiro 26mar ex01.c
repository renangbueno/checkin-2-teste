#include <stdio.h>
#define TAM 2

void popularMatriz(int matriz[TAM][TAM]){
    int i, j;
    for(i = 0; i < TAM; i++){
        for(j = 0; j < TAM; j++){
            matriz[i][j] = 0;
        }
    }
}

void preencherMatriz(int matriz[TAM][TAM]){
    int i, j;
    int cont = 0;
    for(i = 0; i < TAM; i++){
        for(j = 0; j < TAM; j++){
            matriz[i][j] = 99 - cont;
            cont++;
        }
    }
}

void imprimirMatriz(int matriz[TAM][TAM]){
    int i, j;
    for(i = 0; i < TAM; i++){
        for(j = 0; j < TAM; j++){
            printf("matriz[%d][%d] = %d\n", i, j, matriz[i][j]);
        }
    }

int main(){
    int matriz[TAM][TAM];
    int i, j;
    popularMatriz(matriz);
    printf("Matriz inicializada com zeros:\n");
    imprimirMatriz(matriz);
    preencherMatriz(matriz);
    printf("\n\nMatriz preenchida com valores de 99 a 0:\n");
    imprimirMatriz(matriz);

    return 0;
}
