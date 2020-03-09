import Vue from 'vue'
import axios from 'axios'
jest.mock('axios')
import { shallowMount } from '@vue/test-utils'

import Search from '@/components/Search'

describe('components/Search', () => {
  let wrapper
  let input
  beforeEach(() => {
    wrapper = shallowMount(Search)
    input = wrapper.find('input')
    input.setValue('kingsman')
  })

  const mockThenTrigger = response => {
    axios.get.mockImplementation(async () => response)
    input.trigger('keyup.enter')
  }

  it('Should send a request to the right API and append the search parameter', () => {
    const response = { status: 200, data: { Response: 'True' } }
    mockThenTrigger(response)

    expect(axios.get).toHaveBeenCalledWith(
      `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_KEY}&s=kingsman`
    )
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  it('Should emit the results if they are seccessfully retrieved', async () => {
    const movies = [
      'Kingsman: The Secret Service',
      'Kingsman: The Golden Circle'
    ]
    const response = { status: 200, data: { Response: 'True', Search: movies } }
    mockThenTrigger(response)

    await Vue.nextTick()

    //  Same as wrapper.emitted('search')
    expect(wrapper.emitted().search).toBeTruthy()
    expect(wrapper.emitted().search[0][0]).toEqual(movies)
  })

  it('Should not emit the results if the status is different than 200', async () => {
    const response = { status: 500, data: { Response: 'True', Search: [1] } }
    mockThenTrigger(response)

    await Vue.nextTick()

    expect(wrapper.emitted().search).toBeFalsy()
  })

  it('Should not emit the results if the reponse retrieved is False', async () => {
    const response = { status: 200, data: { Response: 'False' } }
    mockThenTrigger(response)

    await Vue.nextTick()

    expect(wrapper.emitted().search).toBeFalsy()
  })

  it('Should display an error message if the API responds with an error', async () => {
    const response = {
      status: 200,
      data: { Response: 'False', Error: 'Too many results.' }
    }
    mockThenTrigger(response)

    await Vue.nextTick()

    const error = wrapper.find('span')
    expect(error.text()).toBe(response.data.Error)
  })

  it('Should make the error message disappear if a new search is successfaul', async () => {
    wrapper.vm.error = 'Too many results.'

    await Vue.nextTick()

    let error = wrapper.find('span')
    expect(error.exists()).toBe(true)

    const response = { status: 200, data: { Response: 'False' } }
    mockThenTrigger(response)

    await Vue.nextTick()

    error = wrapper.find('span')
    expect(error.exists()).toBe(false)
  })
})
