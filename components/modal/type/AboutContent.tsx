import React from "react";
import { Typography, Box, Avatar, Grid, Paper, Divider } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const AboutContent = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About App
      </Typography>
      <StyledPaper elevation={3}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar
              alt="photos"
              sx={{
                width: 200,
                height: 200,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Created By M Luthfan M</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <a href="mailto:mursyidanluthfan@gmail.com">
                mursyidanluthfan@gmail.com
              </a>
            </Typography>
            <Divider />
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Sebuah restoran membutuhkan aplikasi untuk mencatat resep.
              Aplikasi ini mencakup resep makanan, bahan makanan dan kategori
              makanan sebagai fungsi utama. Sebuah resep terdiri dari
              bahan-bahan makanan dan dikelompokkan berdasarkan kategori. Misal
              untuk resep nasi goreng dikelompokan kedalam kategori main course
              dan bahan yang digunakan terdiri nasi 1 piring, telor 2 buah,
              minyak secukupnya, bawang merah 5 siung, bawang putih 5 siung,
              ayam secukupnya, sayur cesim 5 helai, kecap secukupnya dan garam
              secukupnya. Tugas anda adalah membuat aplikasi tersebut dalam
              bentuk web sehingga staff dari restoran dapat menuliskannya,
              sehingga di kemudian hari dapat dilihat daftar dan detail dari
              resep makanan, beserta dengan data master (bahan dan kategori).
              Buatlah desain flow aplikasi yang mudah digunakan bagi user yang
              mengisinya dan dengan melihat segala kemungkinan buatlah desain
              struktur database tersebut semaksimal mungkin tanpa harus
              mengurangi performa.
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
};

export default AboutContent;
