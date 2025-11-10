package in.rakeshkumarparida.ghibliapi.util;

import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class ImageResizer {

    // Allowed dimensions for SDXL models
    private static final int[][] ALLOWED_DIMENSIONS = {
            {1024, 1024}, {1152, 896}, {1216, 832}, {1344, 768},
            {1536, 640}, {640, 1536}, {768, 1344}, {832, 1216}, {896, 1152}
    };

    public static byte[] resizeImageToAllowedDimensions(MultipartFile file) throws IOException {
        BufferedImage originalImage = ImageIO.read(file.getInputStream());
        int originalWidth = originalImage.getWidth();
        int originalHeight = originalImage.getHeight();

        // Find the best matching dimensions
        int[] targetDimensions = findBestDimensions(originalWidth, originalHeight);

        // Resize the image
        BufferedImage resizedImage = new BufferedImage(
                targetDimensions[0],
                targetDimensions[1],
                BufferedImage.TYPE_INT_RGB
        );

        Graphics2D graphics = resizedImage.createGraphics();
        graphics.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
        graphics.drawImage(originalImage, 0, 0, targetDimensions[0], targetDimensions[1], null);
        graphics.dispose();

        // Convert to byte array
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(resizedImage, "png", baos);
        return baos.toByteArray();
    }

    private static int[] findBestDimensions(int width, int height) {
        double aspectRatio = (double) width / height;
        int[] bestMatch = ALLOWED_DIMENSIONS[0];
        double minDifference = Double.MAX_VALUE;

        for (int[] dimensions : ALLOWED_DIMENSIONS) {
            double allowedRatio = (double) dimensions[0] / dimensions[1];
            double difference = Math.abs(aspectRatio - allowedRatio);

            if (difference < minDifference) {
                minDifference = difference;
                bestMatch = dimensions;
            }
        }

        return bestMatch;
    }
}
