# -*- coding: utf-8 -*-
import requests

def test_create_product():
    url = 'http://localhost:3005/crud'
    data = {
        'nome': 'Produto Teste',
        'quantidade': 80
    }

    response = requests.post(url, json=data)

    assert response.status_code == 200  # Verifica se o status da resposta é 200 (OK)

    print("Teste de criação de produto concluído com sucesso.")


def test_get_product():
    url = 'http://localhost:3005/crud'

    response = requests.get(url)

    assert response.status_code == 200  # Verifica se o status da resposta é 200 (OK)

    print("Teste de obtenção de produto concluído com sucesso.")


def test_update_product():
    url = 'http://localhost:3005/crud/1'
    data = {
        'nome': 'Produto Teste Atualizado',
        'quantidade': 100
    }

    response = requests.put(url, json=data)

    assert response.status_code == 200  # Verifica se o status da resposta é 200 (OK)

    print("Teste de atualização de produto concluído com sucesso.")


def test_delete_product():
    url = 'http://localhost:3005/crud/1'

    response = requests.delete(url)

    assert response.status_code == 200  # Verifica se o status da resposta é 200 (OK)

    print("Teste de exclusão de produto concluído com sucesso.")


# Chamar as funções de teste
test_create_product()
test_get_product()
test_update_product()
test_delete_product()

