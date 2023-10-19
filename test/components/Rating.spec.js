import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating.vue'
import 'regenerator-runtime/runtime'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(Rating, {
    propsData: {
      maxStars: 5,
      initialRating: 2
    }
  })
})

describe('Rating.vue', () => {
  it('renders the stars', () => {
    const stars = wrapper.findAll('.star')

    expect(stars.length).toBe(5)
  })

  it('renders the active stars', () => {
    const active = wrapper.findAll('.active.star')

    expect(active.length).toBe(2)
  })
  it('renders a summary', () => {
    const summary = wrapper.find('.summary')

    expect(summary.text()).toBe('2 of 5')
  })
  it('sets the current rating when a star is clicked', () => {
    const starToClick = wrapper.find('.star:nth-child(4)') // Click the 4th star
    starToClick.trigger('click')

    expect(wrapper.vm.currentRating).toBe(4)
  })
  
  it('updates currentRating when input value changes', async () => {
    const input = wrapper.find('input')
    await input.setValue(3)

    expect(wrapper.vm.currentRating).toBe("3")
  })
})
describe('methods', () => {
  it('sets the current rating when a star is clicked', async () => {
    const starToClick = wrapper.find('.star:nth-child(4)') // Click the 4th star
    await starToClick.trigger('click')

    expect(wrapper.vm.currentRating).toBe(4)
  })
})
describe('computed', () => {
  it('calculates isRatingComplete correctly', () => {
    wrapper.setData({ currentRating: 5 })

    expect(wrapper.vm.isRatingComplete).toBe(true)

    wrapper.setData({ currentRating: 3 })

    expect(wrapper.vm.isRatingComplete).toBe(false)
  })
})