module.exports = () => ({
    'users-permissions': {
        enabled: true,
        config: {
          jwt: {
            expiresIn: '15m',
          },
        },
      },
});
