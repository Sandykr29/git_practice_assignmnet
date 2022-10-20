function prime(N) {
  let counter = 0;
  for (i = 1; i <= N; i++) {
    if (N % i === 0) {
      counter++;
    }
    if (counter !== 2) {
      console.log(N, "-is a prime number");
    } else {
      console.log(N, "-is not a prime number");
    }
  }
}
prime();
