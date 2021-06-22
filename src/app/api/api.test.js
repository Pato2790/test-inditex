import { renderHook } from '@testing-library/react-hooks'
import { useGet, usePost } from '.'
import { PRODUCTS_GET, CART_POST } from './constants'

describe('Api service', () => {
  test("useGet for all product", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useGet(PRODUCTS_GET)
    );

    expect(result.current[0]).toEqual([]);
    expect(result.current[1]).toBeTruthy();

    await waitForNextUpdate();

    const data = result.current[0];
    expect(Array.isArray(data)).toBeTruthy();
    expect(data[0]).toHaveProperty('id');
    expect(data[0]).toHaveProperty('brand');
  });

  test("useGet for one product", async () => {
    const id = 'cGjFJlmqNPIwU59AOcY8H'

    const { result, waitForNextUpdate } = renderHook(() =>
      useGet(PRODUCTS_GET, id)
    );

    expect(result.current[0]).toEqual([]);
    expect(result.current[1]).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current[0]).toHaveProperty('id');
    expect(result.current[0]).toHaveProperty('brand');
  });

  test("usePost for new product in the cart", async () => {
    const body = {
      id: 1,
      colorCode: 1,
      storageCode: 1
    }

    const { result, waitForNextUpdate } = renderHook(() =>
      usePost(CART_POST, body)
    );

    expect(result.current[0]).toEqual({});

    const postData = result.current[1];
    postData();

    await waitForNextUpdate();

    expect(result.current[0]).toHaveProperty('count');
  });
})