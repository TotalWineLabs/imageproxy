package imageproxy

import (
	"testing"
)

// Test that demonstrates the fix for the rectangle canvas issue
func TestRectangleCanvasWithSpecifiedWidth(t *testing.T) {
	// Test case 1: Tall image (height > width) with specified width
	tallImage := newImage(100, 200, red) // 100x200 image

	// Transform with width=250 and Rectangle=true
	result := transformImage(tallImage, Options{Width: 250, Rectangle: true})

	// Should create a 250x350 canvas (5:7 ratio)
	expectedWidth := 250
	expectedHeight := 350 // 250 * 7/5 = 350

	if result.Bounds().Dx() != expectedWidth {
		t.Errorf("Tall image with width=250, rect: got width %d, want %d",
			result.Bounds().Dx(), expectedWidth)
	}
	if result.Bounds().Dy() != expectedHeight {
		t.Errorf("Tall image with width=250, rect: got height %d, want %d",
			result.Bounds().Dy(), expectedHeight)
	}

	// Test case 2: Wide image (width > height) with specified width
	wideImage := newImage(300, 100, blue) // 300x100 image

	result2 := transformImage(wideImage, Options{Width: 250, Rectangle: true})

	// Should still create a 250x350 canvas
	if result2.Bounds().Dx() != expectedWidth {
		t.Errorf("Wide image with width=250, rect: got width %d, want %d",
			result2.Bounds().Dx(), expectedWidth)
	}
	if result2.Bounds().Dy() != expectedHeight {
		t.Errorf("Wide image with width=250, rect: got height %d, want %d",
			result2.Bounds().Dy(), expectedHeight)
	}

	// Test case 3: Test with height specified
	tallImage2 := newImage(100, 300, green) // 100x300 image

	result3 := transformImage(tallImage2, Options{Height: 350, Rectangle: true})

	// Should create a 250x350 canvas (height=350, width=350*5/7=250)
	if result3.Bounds().Dx() != 250 {
		t.Errorf("Tall image with height=350, rect: got width %d, want %d",
			result3.Bounds().Dx(), 250)
	}
	if result3.Bounds().Dy() != 350 {
		t.Errorf("Tall image with height=350, rect: got height %d, want %d",
			result3.Bounds().Dy(), 350)
	}
}

// Test that rectangle without dimensions still works as before
func TestRectangleWithoutDimensions(t *testing.T) {
	// Test with an image and Rectangle=true but no width/height specified
	testImage := newImage(100, 200, red) // 100x200 image

	result := transformImage(testImage, Options{Rectangle: true})

	// Should base the canvas on the image dimensions
	// Image is taller than 5:7 ratio, so should base on height
	// Canvas width should be 200 * 5/7 ≈ 142.86 ≈ 142
	expectedWidth := int(float64(200) * 5.0 / 7.0) // ~142
	expectedHeight := 200

	if result.Bounds().Dx() != expectedWidth {
		t.Errorf("Rectangle without dimensions: got width %d, want %d",
			result.Bounds().Dx(), expectedWidth)
	}
	if result.Bounds().Dy() != expectedHeight {
		t.Errorf("Rectangle without dimensions: got height %d, want %d",
			result.Bounds().Dy(), expectedHeight)
	}
}
